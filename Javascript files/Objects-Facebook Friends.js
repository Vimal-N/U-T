/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile ={
    name:"Vimalkumar natarajan",
    friends : 3,
    messages : ["how are you doing","Good Morning!!!","What a day","Successfully completed"],

    postMessage:function(message){

        this.messages.push(message);

    },

    deleteMessage:function(index){
        this.messages.splice(index,1);
    },

    addFriend: function(){
        this.friends +=1;
    },

    removeFriend: function(){
        this.friends -=1;
    }
};