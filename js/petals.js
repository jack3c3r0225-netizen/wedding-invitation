// 花瓣動畫效果
class PetalAnimation {
    constructor() {
        this.canvas = document.getElementById('petalsCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.petals = [];
        this.particleCount = 50;
        
        this.setCanvasSize();
        window.addEventListener('resize', () => this.setCanvasSize());
        
        this.initPetals();
        this.animate();
    }

    setCanvasSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    initPetals() {
        for (let i = 0; i < this.particleCount; i++) {
            this.petals.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height - this.canvas.height,
                size: Math.random() * 20 + 10,
                speedX: Math.random() * 2 - 1,
                speedY: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.3,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: Math.random() * 0.05 - 0.025,
                color: this.getRandomPetalColor()
            });
        }
    }

    getRandomPetalColor() {
        const colors = [
            'rgba(255, 182, 193, 0.6)',  // 淺粉紅
            'rgba(255, 192, 203, 0.6)',  // 粉紅
            'rgba(255, 160, 180, 0.6)',  // 深粉紅
            'rgba(255, 200, 210, 0.5)',  // 淺淡粉紅
            'rgba(255, 240, 245, 0.5)',  // 極淺粉紅
            'rgba(230, 190, 200, 0.5)',  // 柔和粉紅
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    drawPetal(petal) {
        this.ctx.save();
        this.ctx.globalAlpha = petal.opacity;
        this.ctx.fillStyle = petal.color;
        this.ctx.strokeStyle = 'rgba(255, 105, 180, 0.3)';
        this.ctx.lineWidth = 1;

        this.ctx.translate(petal.x, petal.y);
        this.ctx.rotate(petal.rotation);

        // 繪製花瓣形狀
        this.ctx.beginPath();
        this.ctx.moveTo(0, -petal.size / 2);
        this.ctx.quadraticCurveTo(-petal.size / 3, 0, 0, petal.size / 2);
        this.ctx.quadraticCurveTo(petal.size / 3, 0, 0, -petal.size / 2);
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.restore();
    }

    updatePetals() {
        for (let petal of this.petals) {
            petal.x += petal.speedX;
            petal.y += petal.speedY;
            petal.rotation += petal.rotationSpeed;

            // 輕微的橫向漂移
            petal.speedX += Math.random() * 0.2 - 0.1;
            petal.speedX = Math.max(-2, Math.min(2, petal.speedX));

            // 重新出現在頂部
            if (petal.y > this.canvas.height) {
                petal.y = -petal.size;
                petal.x = Math.random() * this.canvas.width;
                petal.opacity = Math.random() * 0.5 + 0.3;
            }

            // 超出左右邊界時重新出現
            if (petal.x > this.canvas.width + petal.size) {
                petal.x = -petal.size;
            } else if (petal.x < -petal.size) {
                petal.x = this.canvas.width + petal.size;
            }
        }
    }

    animate() {
        // 清空畫布
        this.ctx.fillStyle = 'rgba(250, 248, 246, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // 更新並繪製花瓣
        this.updatePetals();
        for (let petal of this.petals) {
            this.drawPetal(petal);
        }

        requestAnimationFrame(() => this.animate());
    }
}

// 頁面加載完成後初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new PetalAnimation();
    });
} else {
    new PetalAnimation();
}
