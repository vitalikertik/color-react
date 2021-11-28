import * as React from 'react';

export class ColoredText extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "Pink"
        };
    }
    onColorChange = (event) => {
        this.setState({
            color: event.target.value
        });
    }
    onBackChange = (event) => {
        this.setState({
            background: event.target.value
        });
    }

    render() {
        return (
            <div>
                <div onChange={this.onColorChange} >
                    <input type="radio" name="color" value="red" /> <span>Red</span>
                    <input type="radio" name="color" value="green" /> <span>Green</span>
                    <input type="radio" name="color" value="blue" /> <span>Blue</span>

                </div>

                <div onChange={this.onBackChange} >
                    <input type="radio" name="background" value="brown" /> <span>Red</span>
                    <input type="radio" name="background" value="coral" /> <span>Green</span>
                    <input type="radio" name="background" value="grey" /> <span>Blue</span>

                </div>
                <div>
                    <p style={{ color: this.state.color, background: this.state.background} }>
                        [12:56] Дарія Гриб
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed ut dui eros. Suspendisse sodales molestie risus, eget
                        convallis sem venenatis et. Suspendisse finibus lacus ac
                        ex euismod, et sodales massa tristique. Mauris ut pellentesque libero.
                        Donec ullamcorper est dolor, quis blandit lacus hendrerit in. In porta
                        cursus risus id euismod. Pellentesque imperdiet erat eget enim sagittis
                        consequat. Pellentesque aliquet augue ac justo scelerisque, sed sollicitudin
                        diam tempus. Quisque pharetra nibh vitae neque cursus iaculis. Fusce vitae
                        feugiat est. Mauris dictum consequat diam id hendrerit.

                    </p>
                </div>
            </div>
        );
        }
        }
                export default ColoredText;