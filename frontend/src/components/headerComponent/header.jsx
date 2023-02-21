import { database } from "../../database" 
import { HeaderStyle } from "./headerStyle"
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from "react";
const Header = () =>{
    const CompleteNameSplit = database.user.name.split(" ")
    const surname = CompleteNameSplit[1]
    const surnameSplit = surname.split("")
    const nameSplit = database.user.name.split("")
    const nameAbreviation = nameSplit[0] + surnameSplit[0]

    const [navMobile, setNavMobile] = useState(false) 
    function ToggleMobile(){
        if(navMobile){
           return setNavMobile(false)
        }
        setNavMobile(true)
    }
    return(
    <>
        <HeaderStyle>
            <h1 className="title">Motors <span className="titleStyle">shop</span></h1>
            <nav className="navBar">
                <ul className="containerList">
                    <li>Carros</li>
                    <li>Motos</li>
                    <li>Leilao</li>
                </ul>
            </nav>
            <div className="userDataContainer"> 
                <div className="containerNameAbreviation">
                    <p className="nameAbreviation">{nameAbreviation}</p>
                </div>
                <p className="userName">{database.user.name}</p>
            </div>
            <button onClick={()=>ToggleMobile(true)} className="btnMobile"><GiHamburgerMenu className="menuMobileStyle"/></button>   
        </HeaderStyle> 
        {navMobile&&
                <nav className="navBarMobile">
                    <ul className="listContainerMobile">
                        <li className="listMobile">Carros</li>
                        <li className="listMobile">Motos</li>
                        <li className="listMobile">Leilao</li>
                    </ul>
                </nav>
        }
    </>
    )
}

export default Header