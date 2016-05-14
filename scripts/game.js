
function StartGame() {
    var self = this;
    
    var levelCode = document.getElementById('input-level-code').value;
    var levelNum = 0;
    if(levelCode != '') {
        // check code
        document.getElementById('input-level-code').value = 'Invalid level code';
    }
    else {
        var game = new Game(levelNum);
        game.run();          
    }
};

function Game(levelNum) {
    var self = this;
    
    this.levelNum = levelNum;
    
    this.levels = [
        Level1,
        Level2  
    ];
    
    function initLevel() {
        self.levels[self.levelNum](LevelComplete, LevelFailed);
    };
    
    function LevelComplete() {
        if(self.levelNum < self.levels.length -1) {
            self.levelNum++;
            self.run();       
        }
    };
    
    function LevelFailed() {
        
    };
    
    this.run = function() {
        initLevel();                      
    };
};

function Level1(complete, failed) {
    var self = this;
    
    this.complete = complete;
    this.failed = failed;
    
    function Draw() {
        
    };
    
    this.complete();
};

function Level2(complete, failed) {
    
};

function Player(name) {
    
    var self = this;
    
    this.name = name;
};