const width = 600;
const height = 630;
const quantity = 300;
const types = [ 'text', 'select', 'progress', 'meter', 'button', 'radio', 'checkbox' ];
const greetings = [ '给你吃脚脚','一起拆炸弹','tutu loves cold','cold给小图做好吃的菜！','cold在加州等着图图', '小cold', '帮我开个zoom', '我们把小厨房通关啦！', '每天踢你一脚', 'Merry Christmas!', '羊腿小子', '图图给cold做甜品', '放小屁', '我很想你', '小甜心♥', 'cold爱图图', '图图一直爱cold', '每天都冲不一样的小茶', '图图喜欢喝粑粑'];

console.log( '.tree' )

let tree = document.querySelector( '.tree' ),
	treeRotation = 0;

tree.style.width = width + 'px';
tree.style.height = height + 'px';

window.addEventListener( 'resize', resize, false );

// The tree
for( var i = 0; i < quantity; i++ ) {
	let element = null,
		type = types[ Math.floor( Math.random() * types.length ) ],
		greeting = greetings[ Math.floor( Math.random() * greetings.length ) ];

	let x = width/2,
		y = Math.round( Math.random() * height );

	let rx = 0,
		ry = Math.random() * 360,
		rz = -Math.random() * 15;

	let elemenWidth = 5 + ( ( y / height ) * width / 2 ),
		elemenHeight = 26;

	switch( type ) {
		case 'button':
			element = document.createElement( 'button' );
			element.textContent = greeting;
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
      element.style.backgroundColor = 'green';
      element.style.color = 'white';
			break;
		case 'progress':
			element = document.createElement( 'progress' );
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
			if( Math.random() > 0.5 ) {
				element.setAttribute( 'max', '100' );
				element.setAttribute( 'value', Math.round( Math.random() * 100 ) );
			}
			break;
		case 'select':
			element = document.createElement( 'select' );
			element.setAttribute( 'selected', greeting );
			// element.innerHTML = '<option>' + greetings.join( '</option><option>' ) + '</option>';
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
      element.style.backgroundColor = 'green';
      element.style.color = 'white';
			break;
		case 'meter':
			element = document.createElement( 'meter' );
			element.setAttribute( 'min', '0' );
			element.setAttribute( 'max', '100' );
			element.setAttribute( 'value', Math.round( Math.random() * 100 ) );
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
      element.style.backgroundColor = 'red';
      element.style.color = 'white';
			break;
		case 'text':
		default:
			element = document.createElement( 'input' );
			element.setAttribute( 'type', 'text' );
			element.setAttribute( 'value', greeting );
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
      element.style.backgroundColor = 'green';
      element.style.color = 'white';
	}

	element.style.transform = `translate3d(${x}px, ${y}px, 0px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`;

	tree.appendChild( element );
}

// Let it snow
for( var i = 0; i < 200; i++ ) {
	let element = document.createElement( 'input' );
	element.setAttribute( 'type', 'radio' );

	let spread = window.innerWidth/2;

	let x = Math.round( Math.random() * spread ) - ( spread / 4 ),
		y = Math.round( Math.random() * height ),
		z = Math.round( Math.random() * spread ) - ( spread / 2 );

	let rx = 0,
		ry = Math.random() * 360,
		rz = 0;

	if( Math.random() > 0.5 ) element.setAttribute( 'checked', '' );

	element.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`;

	tree.appendChild( element );
}

function resize() {
	tree.style.top = ( ( window.innerHeight - height - 100 ) / 2 ) + 'px';
}

resize();
