import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import ErrorPage from "./Component/Error";
import ReduxToastr from "react-redux-toastr";
import store from "./Store/Store";
import { Provider } from "react-redux";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

function App() {
  return (
    <Provider store={store}>
      <ReduxToastr
        timeOut={2000}
        newestOnTop={true}
        preventDuplicates
        position="top-right"
        getState={(state) => state.toastr}
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        removeOnHover={false}
        closeOnToastrClick
      />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
