define(['helper'], function (helper) {
  "use strict";

  return {
    Client: {
      build: function build() {

      },
      fire: function fire(cmd) {
        fire_client_command(cmd);
      }
    },
    Server: {
      build: function build() {

      },
      fire: function fire(cmd) {
        fire_server_command(cmd);
      }
    }
  }

});
