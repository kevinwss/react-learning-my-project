
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CityList from './pages/CityList';

import { Button } from 'antd-mobile';

function App() {
  return (
    <Router>
      <div className="App">
        {/* 项目根组件 <Button>登录</Button> */}

        {/* 路由链接 */}
        <Link to="/home">首页</Link>
        <Link to="/citylist">城市选择</Link>
        {/* 路由规则 */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/citylist" element={<CityList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
