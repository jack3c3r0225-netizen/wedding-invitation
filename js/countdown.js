// 倒數計時器
class CountdownTimer {
    constructor() {
        // 修改此日期為你的婚禮日期 (格式: YYYY-MM-DD HH:mm:ss)
        this.weddingDate = new Date('2024-12-25 18:00:00').getTime();
        
        this.daysElement = document.getElementById('days');
        this.hoursElement = document.getElementById('hours');
        this.minutesElement = document.getElementById('minutes');
        this.secondsElement = document.getElementById('seconds');
        this.dateElement = document.getElementById('weddingDate');
        
        this.setDateDisplay();
        this.updateCountdown();
        setInterval(() => this.updateCountdown(), 1000);
    }

    setDateDisplay() {
        const weddingDateObj = new Date(this.weddingDate);
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            weekday: 'long'
        };
        const formattedDate = weddingDateObj.toLocaleDateString('zh-TW', options);
        if (this.dateElement) {
            this.dateElement.textContent = formattedDate;
        }
    }

    updateCountdown() {
        const now = new Date().getTime();
        const gap = this.weddingDate - now;

        if (gap > 0) {
            const days = Math.floor(gap / (1000 * 60 * 60 * 24));
            const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((gap % (1000 * 60)) / 1000);

            this.daysElement.textContent = this.padZero(days);
            this.hoursElement.textContent = this.padZero(hours);
            this.minutesElement.textContent = this.padZero(minutes);
            this.secondsElement.textContent = this.padZero(seconds);
        } else {
            // 婚禮已開始
            this.daysElement.textContent = '0';
            this.hoursElement.textContent = '0';
            this.minutesElement.textContent = '0';
            this.secondsElement.textContent = '0';
            
            const countdown = document.querySelector('.countdown');
            if (countdown) {
                countdown.innerHTML = '<h3>💕 感謝您的祝福與參與 💕</h3>';
            }
        }
    }

    padZero(num) {
        return num < 10 ? '0' + num : num;
    }
}

// 音樂控制
class MusicController {
    constructor() {
        this.audio = document.getElementById('bgMusic');
        this.button = document.getElementById('musicToggle');
        
        if (this.button) {
            this.button.addEventListener('click', () => this.toggleMusic());
        }
    }

    toggleMusic() {
        if (this.audio.paused) {
            this.audio.play().catch(err => {
                console.log('音樂播放失敗:', err);
            });
            this.button.classList.add('playing');
        } else {
            this.audio.pause();
            this.button.classList.remove('playing');
        }
    }
}

// 頁面加載完成後初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new CountdownTimer();
        new MusicController();
    });
} else {
    new CountdownTimer();
    new MusicController();
}
