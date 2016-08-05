 /**
 * App ID for Invention fact skill
 */
var APP_ID = "amzn1.echo-sdk-ams.app.cf87cc59-24b6-4f21-9d9d-ef8ae09442ba"; 
/**
 * Array containing invention facts.
 */
var INVENTION_FACTS = [
    "Probably one of the single most important things in our lives, if the power of Electricity had never been harnessed we would not have even a fraction of what we have in the world today. No TV, no microwave ovens, no air conditioning, and no way to charge your mobile phone.",
    "The invention of the Light Bulb allow you to not sit in the dark. You can be thankful to Thomas Edison for inventing the light bulb. Joseph Swan did similar work in Britain at the time, and eventually the two merged their ideas into a single company, Ediswan. The bulb itself works by transmitting electricity through a wire with high resistance known as a filament. The waste energy created by the resistance is expelled as heat and light.",
    "Computers have changed our lives in so many ways, from landing on the moon to simply browsing the web, none of it would have been possible without them. In fact, it is hard to think of any aspect of life that has not been improved by computers. They are able to make complicated mathematical calculations at an incredible rate of speed and when they operate under the instructions of skilled programmers, they can accomplish amazing feats.",
    "More than 1.7 billion people, or 25 percent of the world use the Internet. It is such a powerful invention that we have probably only begun to see its long term effects. The department of US defense first used a service called ARPANET in the 1960s. Then, in 1989, Tim Berner Lee invented the World Wide Web, which shrank the world like nothing else.",
    "The worldwide spread of Email affected the exchange of communications. Before email, a business in the United States sending an important document overseas printed the document, packaged it, paid for the delivery service and waited days for it to arrive at the destination. After email grew to be a part of all international businesses, companies and students possessed the ability to send formal communications to the recipient in minutes.",
    "While the Steam Engine has been overshadowed by electric and internal combustion engines in the areas of transport and factory power, it is still incredibly important. Most power plants in the world actually generate electricity using steam turbines, whether the steam is heated by burning coal, natural gas, or a nuclear reactor.",
    "The Automobile is one of the best inventions. Do you know there are approximately 600 million passenger cars worldwide? That is roughly one car per eleven people! We all know how important they are in our life and it would be hard to imagine a world without them.",
    "An Aircraft, allows one to travel 4,500 miles in 8 hours. We all should be thankful to the Orville and Wilbur Wright, commonly known as The Wright Brothers, who developed the three-axis control system with the incorporation of a movable rudder on their 1902 Glider. The glider was the basis for their patented control system still used on modern fixed-wing aircraft.",
    "There are more than 5 billion Mobile Phones in the world, and the number is growing rapidly in China and India.  Mobile technology has changed how we communicate, as it allows us to make calls, send text messages, take a picture or even update our facebook status from any location.",
    "The Television or colloquially just TV, has become commonplace in our homes, offices, and institutions, particularly as a prime source for advertising, entertainment, and news. Since the 1970s the availability of video cassettes, CDs, DVDs and now Blu-ray Discs, has resulted in the frequent use of TV for viewing recorded as well as broadcasted material. In recent years Internet television has risen to prominence with websites like Netflix and Hulu.",
    "The invention of the Gun, it does not need any introduction for we all know about its function and capability. The first gun was fired in the late 13th century, and modern versions of the metal bullet were first introduced in 1857.",
    "Alexander Graham made the first working Telephone in the 1870s. Today there are 1.3 billion phone lines in use around the world.  The modern telephone network, consisting of a worldwide net of telephone lines, fiber optic cables, cellular networks, communications satellites, and undersea telephone cables connected by switching centers, allows any telephone in the world to communicate with any other.",
    "The first Digital Camera was invented and built by Steven Sasson, a Kodak engineer in 1975. It used a charge-coupled device image sensor. The first digital camera was just 0.01 mega pixels but now we have digital cameras up to 160 mega pixels. Every smartphone has its own digital camera attached to its back that varies from from VGA to 8 mega pixels.",
    "Gaming Consoles changed the way we entertain ourselves indoors. Whether you are staying physically fit by exercising on the Nintendo Wii or blasting away your opponents on a first-person shooter, the world of game consoles has come a long way since the release of Pong in 1972. Modern game consoles are equipped with the ability to process graphics so realistic that many games can be downright startling, and the enemies have become so well designed that it almost seems like some video games can predict and counteract your every move.",
    "Robots are helping us in many aspects of life. They are used in car productions, packaging of manufactured goods, mass production of printed circuit boards, space probes, military drones and humanoid robots like ASIMO designed and developed by HONDA.  ASIMO, which is an acronym for “Advanced Step in Innovative Mobility”, was created to be a personal assistant.",
    "The Bar Code, those boring set of black and white lines was developed by Norman Woodland, but they can be found on almost every single item in the grocery store. At first glance, it seems hard to see how they could possibly make any impact on the world, but they have fundamentally changed the way we shop",
    "The Printing Press in 1454 was for first time constructed as a press that comprised moveable metal type, which, when laid over ink, could print repeatedly onto paper. It was constructed by German goldsmith Johannes Gutenberg. The introduction of computers in the 1950s revolutionized printing composition, with more and more steps in the print process being replaced by digital data.  Today we have modern electronic printing presses in our homes and offices commonly known as printers.",
    "The first Radio waves were sent and received by Russian, Italian-Irish inventor Guglielemo Marconi. He saw the potential in this technology.  Marconi sent the first transatlantic radio message, three dots for the letter S, in 1901. Since then Radio became an important part of our daily life, from listening to news bulletins to baseball matches, and even the invention of TV barely affected its significance.",
    "Automated teller machines” better know as ATM’s were invented by John Shephed Barron. The first ATM was introduced in June 1967 at Barclays Bank in Enfield, United Kingdom. If you run out of cash, do not worry, find an ATM!",
    "The Fridge is the greatest kitchen convenience in history. Before its conception, icehouses were used to provide cool storage for most of the year. The first refrigerator to see widespread use was the General Electric Monitor-Top refrigerator introduced in 1927.",
    "The Calculator does not need any introduction as every middle schooler knows its importance in our lives. The first electronic calculator was created in the 1960s, and the pocket size version became available in 1970s. From students to researchers to scientists, everyone carries a calculator these days and it would be hard to find a cell phone without a pre installed calculator app on it.",
    "The first commercial Microwave Oven was sold in 1947. They are most commonly used for rapid reheating of previously-cooked foods and rapid heating of slowly-prepared cooking items, such as melting chocolates or butter. Now days, any modern kitchen would be incomplete without this amazing and helpful machine",
    "Credit cards were first used in the 1920s, in the US, specifically to sell fuel to a growing number of automobile owners. Now days, credit cards are used everywhere from fuel payments to online shopping as they allow small short-term loans to be made quickly to a customer who doesn’t need to calculate a remaining balance before every transaction.",
    "GPS or Global Positioning System was developed in 1978, and was made to pinpoint your exact position to within a couple of meters with the help of up to 32 satellites. It became a great invention for explorers, paramedics, and pilots but now even for common people who have GPS enabled devices in their cars or even GPS based apps on their smart phones.",
    "The IPod has amazing storage capability, the largest model being able to hold more than 30,000 songs! Not surprisingly, IPod has made an astronomical number of sales, more than 110 million units."
];
    
/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');


var Invention = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Invention.prototype = Object.create(AlexaSkill.prototype);
Invention.prototype.constructor = Invention;

Invention.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("Invention onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

Invention.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("Invention onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewFactRequest(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
Invention.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("Invention onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};
Invention.prototype.intentHandlers = {
    "GetNewFactIntent": function (intent, session, response) {
        handleNewFactRequest(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can ask Invention tell me a fact, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

/**
 * Gets a random new fact from the list and returns to the user.
 */
function handleNewFactRequest(response) {
    // Get a random space fact from the space facts list
    var factIndex = Math.floor(Math.random() * INVENTION_FACTS.length);
    var fact = INVENTION_FACTS[factIndex];

    // Create speech output
    var speechOutput = "Here's an Invention that changed our way of life: " + fact;

    response.tellWithCard(speechOutput, "Invention", speechOutput);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the SpaceGeek skill.
    var invention = new Invention();
   invention.execute(event, context);
};

