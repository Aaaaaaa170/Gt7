export class Menu {


    element:HTMLDivElement;


    constructor(){


        this.element =
            document.createElement(
                "div"
            );


        this.element.style.position =
            "fixed";


        this.element.style.top =
            "50%";


        this.element.style.left =
            "50%";


        this.element.style.transform =
            "translate(-50%,-50%)";


        this.element.style.color =
            "white";


        this.element.style.fontSize =
            "40px";


        this.element.innerText =
            "GT WEB RACING";


        document.body.appendChild(
            this.element
        );


    }



    hide(){

        this.element.style.display =
            "none";

    }


}
