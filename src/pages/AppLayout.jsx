import NavBar from '../ui/SearchBar';
import Cart from '../ui/Cart';
import Profile from '../ui/Profile';
import MainSection from '../ui/MainSection';
function AppLayout() {
  return (
    <div className="layoutContainer">
      <NavBar></NavBar>
      <Profile></Profile>

      <MainSection></MainSection>
      <Cart></Cart>
    </div>
  );
}

export default AppLayout;
