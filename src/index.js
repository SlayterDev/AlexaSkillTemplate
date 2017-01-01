var AlexaSkill = require('./AlexaSkill')
  , APP_ID	   = process.env.APP_ID;

// TODO: Change Skill name
var MySkill = function() {
	AlexaSkill.call(this, APP_ID);
};

MySkill.prototype = Object.create(AlexaSkill.prototype);
MySkill.prototype.constructor = MySkill;

MySkill.prototype.eventHandlers.onLaunch = function(launchRequest, session, response) {
	var output = "Welcome to MySkill!";

	response.ask(output);
};

MySkill.prototype.intentHandlers = {
	HelpIntent: function(intent, session, response) {
		var output = "Help text here.";

		response.ask(output);
	}
};

exports.handler = function(event, context) {
	var skill = new MySkill();
	skill.execute(event, context);
};
