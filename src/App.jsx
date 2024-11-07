import { Routes, Route } from "react-router-dom";
import { Admin, Login, Protected } from "./pages";
// import { useEffect, useState } from "react";

function App() {
  // const [user, setUser] = useState(null)

  // useEffect(() =>{
  //   const local = JSON.parse(localStorage.getItem('userData'))
  //   setUser(local)
  // }, [])

  return (
    <div className="min-h-screen">
      <Routes>
        {/* <Route path="/" element={user &&
              (user?.role == 'hr' ) ? <HiringManager /> :
              (user?.role == 'client' ) ?  <Client /> : <Applicant/>}
        /> */}
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin/:id" element={<Protected><Admin /></Protected>} />
        {/* <Route path="/admin/:id" element={<Admin />} /> */}
      </Routes>
    </div>
  )
}

export default App
