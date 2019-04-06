import React from "react";
import styled from "styled-components";


const  H3 = styled.div`
  	color: ${props => props.theme.text};
  	font-family: "kotori_roseregular";
  	font-size: 15px;
  	font-weight: normal;
  	letter-spacing: 2px;
  	margin: 30px 0 0;
  	padding: 0;
  	text-transform: uppercase;

  	@media (max-width: 576px) {
    	font-size: 13px;
    	letter-spacing: 0px;
    	margin: 10px 0 0;
  	}
`;

class Scramble extends React.Component {
	componentDidMount() {
		class TextScramble {
      		constructor(el) {
        		this.el = el;
        		this.chars = "ontfderntractivedr";
        		this.update = this.update.bind(this);
			  }

      		setText(newText) {
        		const oldText = this.el.innerText;
        		const length = Math.max(oldText.length, newText.length);
        		const promise = new Promise(resolve => (this.resolve = resolve));
        		this.queue = [];
        		for (let i = 0; i < length; i++) {
          			const from = oldText[i] || "";
          			const to = newText[i] || "";
          			const start = Math.floor(Math.random() * 40);
          			const end = start + Math.floor(Math.random() * 40);
          			this.queue.push({ from, to, start, end });
				}

        		cancelAnimationFrame(this.frameRequest);
        		this.frame = 0;
        		this.update();
        		return promise;
			}

      		update() {
        		let output = "";
        		let complete = 0;
        		for (let i = 0, n = this.queue.length; i < n; i++) {
          		let { from, to, start, end, char } = this.queue[i];
          		if (this.frame >= end) {
            		complete++;
            		output += to;
				}
					else if (this.frame >= start) {
            			if (!char || Math.random() < 0.28) {
              			char = this.randomChar();
              			this.queue[i].char = char;
            			}
            		output += `<span className="dud">${char}</span>`;
					}
					else { output += from; }
        		}
        		this.el.innerHTML = output;
        		if (complete === this.queue.length) {
          			this.resolve();
				}
				else {
          			this.frameRequest = requestAnimationFrame(this.update);
          			this.frame++;
        		}
      		}
      		randomChar() {
        		return this.chars[Math.floor(Math.random() * this.chars.length)];
      		}
    	}
    	

    	const el = document.querySelector(".scramble");
    	const fx = new TextScramble(el);

    	let counter = 0;
    	const next = () => {
      		fx.setText(this.props.phrases[counter]).then(() => {
        		setTimeout(next, 3000);
			  });
      		counter = (counter + 1) % this.props.phrases.length;
		};

    	next();
  	}
	render() {
		return <H3 className="scramble" />;
	}
}

export default Scramble;
