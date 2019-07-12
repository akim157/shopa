function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        },
        set: function(value) {
            duration = value;
        }
    });
    Object.defineProperty(this, 'startTime', {
        get: function() {
            return startTime;
        }
    });
    Object.defineProperty(this, 'endTime', {
        get: function() {
            return endTime;
        }
    });
    Object.defineProperty(this, 'running', {
        get: function() {
            return running;
        },
        set: function (value) {
            running = value;
        }
    });
}

Stopwatch.prototype.start = function() {
    if (this.running)
        throw new Error('Секундомер уже запущен');
    this.running = true;
    this.startTime = new Date();
};
Stopwatch.prototype.stop = function() {
    if (!this.running)
        throw new Error('Секундомер уже остановлен');
    this.running = false;
    this.endTime = new Date();
    const result = (endTime.getTime() - startTime.getTime()) / 1000;
    this.duration += result;
};
Stopwatch.prototype.reset = function() {
  this.duration = 0;
  this.startTime = null;
  this.endTime = null;
  this.running = null;
};

// Premature optimization is the root of all evils (Преждевременная оптимизация - корень всех зол)
