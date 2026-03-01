function App() {
  return(
    <div>
    <div className="flex items-center justify-between h-[200px] bg-slate-900 text-white p-3">
      <div className="font-bold">Logo</div>
      <div className="flex gap-2">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white p-6 gap-6">
    <div className="bg-slate-600 p-4 rounded">Feature One</div>
    <div className="bg-slate-600 p-4 rounded">Feature Two</div>
    <div className="bg-slate-600 p-4 rounded">Feature Three</div>
    <div className="bg-slate-600 p-4 rounded">Feature Four</div>
    <div className="bg-slate-600 p-4 rounded">Feature Five</div>
    <div className="bg-slate-600 p-4 rounded">Feature Six</div>
     </div>
    </div>
  )
};

export default App;