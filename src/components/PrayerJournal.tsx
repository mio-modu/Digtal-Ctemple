import React, { useState } from 'react';

interface PrayerEntry {
  id: number;
  date: string;
  content: string;
  answered: boolean;
}

const PrayerJournal = () => {
  const [entries, setEntries] = useState<PrayerEntry[]>([]);
  const [newPrayer, setNewPrayer] = useState('');

  const addPrayer = () => {
    if (!newPrayer.trim()) return;
    
    const entry: PrayerEntry = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      content: newPrayer,
      answered: false
    };
    
    setEntries([entry, ...entries]);
    setNewPrayer('');
  };

  const toggleAnswered = (id: number) => {
    setEntries(entries.map(entry => 
      entry.id === id ? { ...entry, answered: !entry.answered } : entry
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-serif mb-8">나의 기도 일지</h2>
      
      <div className="mb-8">
        <textarea
          value={newPrayer}
          onChange={(e) => setNewPrayer(e.target.value)}
          placeholder="오늘의 기도를 기록해보세요..."
          className="w-full h-32 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addPrayer}
          className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          기도 기록하기
        </button>
      </div>

      <div className="space-y-4">
        {entries.map(entry => (
          <div
            key={entry.id}
            className={`p-4 border rounded-lg ${
              entry.answered ? 'bg-green-50 border-green-200' : 'bg-white'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-600 text-sm mb-2">{entry.date}</p>
                <p className="text-gray-800">{entry.content}</p>
              </div>
              <button
                onClick={() => toggleAnswered(entry.id)}
                className={`px-3 py-1 rounded-full text-sm ${
                  entry.answered
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {entry.answered ? '응답됨' : '응답 대기중'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrayerJournal; 