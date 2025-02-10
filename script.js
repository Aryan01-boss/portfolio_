// Add Font Awesome for icons
const fontAwesome = document.createElement('link');
fontAwesome.rel = 'stylesheet';
fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
document.head.appendChild(fontAwesome);

// Create geometric art
function createGeometricArt() {
    const art = document.getElementById('geometricArt');
    const shapes = ['square', 'circle', 'triangle'];
    const colors = ['#4ecdc4', '#ffffff', '#ffffff'];
    
    for (let i = 0; i < 15; i++) {
        const shape = document.createElement('div');
        shape.className = 'geometric-shape';
        
        const size = Math.random() * 50 + 20;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const rotation = Math.random() * 360;
        const duration = Math.random() * 5 + 5;
        const delay = Math.random() * -5;
        
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.left = `${left}%`;
        shape.style.top = `${top}%`;
        shape.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
        shape.style.transform = `rotate(${rotation}deg)`;
        shape.style.animation = `float ${duration}s infinite ease-in-out ${delay}s`;
        
        if (i % 3 === 0) {
            shape.style.borderRadius = '50%';
        } else if (i % 3 === 1) {
            shape.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
        }
        
        art.appendChild(shape);
    }
}

// Initialize the geometric art
createGeometricArt();
