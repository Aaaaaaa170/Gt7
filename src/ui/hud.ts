export class HUD {

    element: HTMLDivElement;


    constructor(){

        this.element =
            document.createElement(
                "div"
            );


        this.element.style.position =
            "fixed";


        this.element.style.top =
            "20px";


        this.element.style.left =
            "20px";


        this.element.style.color =
            "white";


        this.element.style.fontSize =
            "24px";


        this.element.style.fontFamily =
            "Arial";


        this.element.innerHTML =
            `
            SPEED: 0 km/h<br>
            RPM: 1000
            `;


        document.body.appendChild(
            this.element
        );

    }



    update(
        speed:number,
        rpm:number
    ){

        this.element.innerHTML =
        `
        SPEED: ${Math.floor(speed)}
        km/h
        <br>
        RPM: ${Math.floor(rpm)}
        `;

    }


}
