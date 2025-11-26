function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {/* 헤더 */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              React + TypeScript + Tailwind CSS
            </h1>
            <p className="text-xl text-gray-600">
              React Kit CLI로 생성된 프로젝트입니다
            </p>
          </div>

          {/* 카드 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white">프로젝트 설정 완료</h2>
            </div>
            
            <div className="p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">TypeScript 설정 완료</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Tailwind CSS 설정 완료</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">ESLint & Prettier 설정 완료</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Vite 빌드 도구 설정 완료</span>
                </div>
              </div>
            </div>
          </div>

          {/* 푸터 */}
          <div className="mt-8 text-center text-gray-500">
            <p>개발 서버 실행: <code className="bg-gray-200 px-2 py-1 rounded">npm run dev</code></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
