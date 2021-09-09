import style from "styled-components";
export const Navwrapper = style.div`
background-color:rgb(253, 183, 59);

form
{
    background-color:white;
    border-radius:20px;
    margin-left:20px;
    width:35%;
    padding:0px 10px;
input
    {
        border:none;
    }
    input:focus
    {
        box-shadow:none;
    }
}
.nav-link
{
    color:rgb(23, 28, 32)!important;
    font-family: "Poppins", sans-serif;
}
.buts button{
    background-color:rgb(253, 183, 59);
    border:rgb(254, 183, 60);
}
.buts button{
    background-color:rgb(253, 183, 59);
    border:1px solid rgb(235,225,41);
    cursor:pointer;
}
.buts button:hover{
    background-color:yellow;
    transition:2s;
    border:1px solid rgb(235,225,41);
}
`;
