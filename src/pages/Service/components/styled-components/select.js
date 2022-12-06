import styled from "styled-components";

export const Dropdown = styled.div`
    width:100%;    
    font-family: var(--Font-Family-Titles);
    position:relative;

`;

export const DropdownSelect = styled.div`
    border-radius: 4px;
    box-sizing:border-box;
    border: 2px solid var(--Color-Button-Blue);
    background-color: var(--Color-Background-Modal);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.6rem;
    overflow: hidden;
    cursor: pointer;
    .iconSelect{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--Color-Button-Blue);
        color: var(--Color-Background-Modal);
        padding: 0.5rem;
    }
`;

export const Select = styled.span`
    margin: 0;
`;
export const DropdownList = styled.div`
    border-radius:  0 0 4px 4px;
    background-color: var(--Color-Background-Modal);
    border: 2px solid var(--Color-Button-Blue);
    border-top: none;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    opacity: 1;
    visibility: visibility;
    transition: opacity .2s linear, visibility .2s linear;

    .dropdownListItem{
        padding: .25rem 0;
        cursor: pointer;

        &:hover{
            background-color: var(--Color-Button-Blue);
            color: var(--Color-Background-Modal);
        }
    }

`;


export const ContainerExamples = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr); 
    padding: .2rem;
    border-radius: 4px;

    .imgExample{
            margin: .2rem;
            border-radius: 4px;
            overflow: hidden;
            cursor: pointer;
            transition: transform .2s linear;
            border: 1px solid var(--Color-Background-Modal-Overlay);
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;


        }

        &:hover{
            transform: scale(1.1);
            transition: transform .2s ease-in-out;
        }

    }

    #selected{
        border: 2px solid var(--Color-Button-Blue);
    }
`;

export const ContainerColors = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    padding: .2rem;
    border-radius: 4px;

    .imgExample{
            display: flex;
            flex-direction: column;
            margin: .2rem.4rem;
            border-radius: 4px;
            overflow: hidden;
            cursor: pointer;
            transition: transform .2s linear;
            border: 1px solid var(--Color-Background-Modal-Overlay);
        img{
            width: 100%;
        }


        p{
            margin: 0;
            font-size: .75rem;
        }

        &:hover{
            transform: scale(1.1);
            transition: transform .2s ease-in-out;
        }

    }

    #selected{
        border: 1.5px solid var(--Color-Button-Blue);
    }

`;

export const ContainerProductsExamples = styled.div`
    display:flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: .2rem;
    max-width: 900px;
    margin: 0 auto;
`;

export const ContainerProductExample = styled.div`
    width: 230px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: .35rem;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 1rem;

    img{
        width: 100%;
        border-radius: 4px;
    }

    h3{
        font-family: var(--Font-Family-Titles);
        margin: .8rem 1rem;
        font-size: 1.4rem;
        text-align: center;
        letter-spacing: .4px;        
    }

    p{
        font-family: var(--Font-Family-Text);
        padding: 0 1rem;
        Text-align: center;
        margin-bottom: .8rem;
    }
`;