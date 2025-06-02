import { useState, ChangeEvent, FormEvent } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail 
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { Link, useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  userId: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    userId: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [userIdChecked, setUserIdChecked] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (name === 'userId') {
      setUserIdChecked(false);
    }
  };

  const checkUserIdDuplicate = async () => {
    if (!formData.userId) {
      setError('아이디를 입력해주세요.');
      return;
    }

    try {
      const userRef = doc(db, 'users', formData.userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setError('이미 사용 중인 아이디입니다.');
        setUserIdChecked(false);
      } else {
        setError('');
        setUserIdChecked(true);
      }
    } catch (error) {
      console.error('아이디 중복 확인 중 오류:', error);
      setError('아이디 중복 확인 중 오류가 발생했습니다.');
      setUserIdChecked(false);
    }
  };

  const validateForm = async (): Promise<boolean> => {
    if (!isLogin) {
      if (!userIdChecked) {
        setError('아이디 중복 확인이 필요합니다.');
        return false;
      }

      if (formData.password !== formData.confirmPassword) {
        setError('비밀번호가 일치하지 않습니다.');
        return false;
      }

      if (formData.password.length < 6) {
        setError('비밀번호는 6자 이상이어야 합니다.');
        return false;
      }

      try {
        const methods = await fetchSignInMethodsForEmail(auth, formData.email);
        if (methods.length > 0) {
          setError('이미 사용 중인 이메일입니다.');
          return false;
        }
      } catch (error) {
        console.error('이메일 확인 중 오류:', error);
        setError('이메일 확인 중 오류가 발생했습니다.');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!(await validateForm())) {
        setLoading(false);
        return;
      }

      if (isLogin) {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', formData.userId);
        navigate('/');
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        await setDoc(doc(db, 'users', userCredential.user.uid), {
          name: formData.name,
          userId: formData.userId,
          email: formData.email,
          createdAt: new Date().toISOString()
        });
        setShowSuccess(true);
        setTimeout(() => {
          setIsLogin(true);
          setShowSuccess(false);
        }, 2000);
      }

      setFormData({
        name: '',
        userId: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      setUserIdChecked(false);

    } catch (error: any) {
      console.error('인증 에러:', error);
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('이미 사용 중인 이메일입니다.');
          break;
        case 'auth/invalid-email':
          setError('유효하지 않은 이메일 형식입니다.');
          break;
        case 'auth/weak-password':
          setError('비밀번호는 6자 이상이어야 합니다.');
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          setError('이메일 또는 비밀번호가 올바르지 않습니다.');
          break;
        default:
          setError('인증 중 오류가 발생했습니다.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-yellow-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif text-gray-800 mb-2">회원가입 완료!</h2>
            <p className="text-gray-600">환영합니다. 이제 로그인하실 수 있습니다.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* 배경 이미지와 오버레이 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          filter: "brightness(0.3)"
        }}
      />
      
      {/* 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />

      <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <Link to="/" className="text-4xl font-serif text-yellow-300 hover:text-yellow-400 transition duration-300">
              디지털 성소
            </Link>
            <h2 className="mt-6 text-3xl font-serif text-white">
              {isLogin ? '로그인' : '회원가입'}
            </h2>
          </div>

          <div className="bg-black/50 backdrop-blur-sm py-8 px-6 shadow-2xl rounded-2xl border border-yellow-300/20">
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-6 py-3 rounded-full transition duration-300 ${
                  isLogin
                    ? 'bg-yellow-300 text-black'
                    : 'bg-transparent text-yellow-300 border-2 border-yellow-300 hover:bg-yellow-300/10'
                }`}
              >
                로그인
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-6 py-3 rounded-full transition duration-300 ${
                  !isLogin
                    ? 'bg-yellow-300 text-black'
                    : 'bg-transparent text-yellow-300 border-2 border-yellow-300 hover:bg-yellow-300/10'
                }`}
              >
                회원가입
              </button>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded-lg" role="alert">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
              
              <div className="space-y-4">
                {!isLogin && (
                  <>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-yellow-300">이름</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="mt-1 block w-full bg-black/50 border border-yellow-300/30 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 focus:border-transparent"
                        placeholder="이름을 입력하세요"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="userId" className="block text-sm font-medium text-yellow-300">아이디</label>
                      <div className="mt-1 flex">
                        <input
                          id="userId"
                          name="userId"
                          type="text"
                          required
                          className="block w-full bg-black/50 border border-yellow-300/30 rounded-l-lg shadow-sm py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 focus:border-transparent"
                          placeholder="아이디를 입력하세요"
                          value={formData.userId}
                          onChange={handleChange}
                        />
                        <button
                          type="button"
                          onClick={checkUserIdDuplicate}
                          className="inline-flex items-center px-4 py-3 border border-transparent text-sm font-medium rounded-r-lg text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                        >
                          중복확인
                        </button>
                      </div>
                      {userIdChecked && (
                        <p className="mt-2 text-sm text-green-400">
                          사용 가능한 아이디입니다.
                        </p>
                      )}
                    </div>
                  </>
                )}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-yellow-300">이메일</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full bg-black/50 border border-yellow-300/30 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 focus:border-transparent"
                    placeholder="이메일을 입력하세요"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-yellow-300">비밀번호</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="mt-1 block w-full bg-black/50 border border-yellow-300/30 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 focus:border-transparent"
                    placeholder="비밀번호를 입력하세요"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                {!isLogin && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-yellow-300">비밀번호 확인</label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      required
                      className="mt-1 block w-full bg-black/50 border border-yellow-300/30 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 focus:border-transparent"
                      placeholder="비밀번호를 다시 입력하세요"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 transition duration-300"
                >
                  {loading ? '처리 중...' : isLogin ? '로그인' : '회원가입'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth; 