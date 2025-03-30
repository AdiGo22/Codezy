import './App.css'

function App() {
  return (
    <>
    <Router>

      <Routes>
      <Route path="" element={<Navigate to={`${LOGIN}`} />} />
      <Route path={`/${LOGIN}`} element={<Login/>} />
      <Route path="/*" element={<PrivateRoute><Home/></PrivateRoute>} />
      <Route path="*" element={<PageNotFound redirectPath={`/${LOGIN}`}/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
