import styled from "styled-components";

export const HeaderStyle = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap');
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;

   
       
    li{
        list-style: none;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #495057;
    }
    .containerList{
        display: flex;
        justify-content: flex-end;
        gap: 5%;
    }
    .userDataContainer{
        padding-left: 1%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 2%;
        gap: 5px;
        border-left: solid 2px #DEE2E6;
    }
    .navBar{
        width: 70%;
    }
    .containerNameAbreviation{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #5126EA;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        margin-right: 5px;
    }
    .nameAbreviation{
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: #FFFFFF;
    }
    .userName{
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #495057;
    }
    .title{
            font-family: 'Inter', sans-serif;
            font-weight: 700;
            font-size: 30px;
            background-image: linear-gradient(90deg, rgba(2,0,36,1) 46%, rgba(69,41,230,1) 57%);
            background-clip: text;
            -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent;
            color: black;
    }
        .titleStyle{
            font-size: 20px;
        }
    .btnMobile, .menuMobile{
        display: none;
    }
  
    @media (min-width: 320px) and (max-width: 768px){
        display: flex;
        justify-content: center;
        align-items: center;
         
        .title{
            font-family: 'Inter', sans-serif;
            font-weight: 700;
            font-size: 30px;
            background-image: linear-gradient(90deg, rgba(2,0,36,1) 46%, rgba(69,41,230,1) 57%);
            background-clip: text;
            -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent;
            color: black;
            margin-right: 40%;
    }
        .titleStyle{
            font-size: 20px;
        }
        
        .menuMobile{
            display: flex;
        }
        .btnMobile{
            display: flex;
            background-color: transparent;
            border: none;
            font-size: 25px;
        }
        .navBar, .userDataContainer{
            display: none;
        }
        
        .listContainerMobile{
            list-style: none;
        }
    
    }
    @media (min-width: 320px) and (max-width: 425px){
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: solid 1px black;

        .title{
            font-family: 'Inter', sans-serif;
            font-weight: 700;
            font-size: 30px;
            background-image: linear-gradient(90deg, rgba(2,0,36,1) 46%, rgba(69,41,230,1) 57%);
            background-clip: text;
            -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent;
            color: black;
            margin-right: 35%;
        }
        .titleStyle{
            font-size: 20px;
        }

        .listContainerMobile{
            list-style: none;
        }
    }
`