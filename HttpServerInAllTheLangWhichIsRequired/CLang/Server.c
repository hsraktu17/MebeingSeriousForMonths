#include "Server.h"


struct Server server_constructor(int domian, int service, int protocol, u_long interface, int port, int backlog, void (*launch)(void))
{
  struct Server server;
  
  server.domain = domain;
  server.service = service;
  server.protocol = protocol;
  server.interface = interface;
  server.port = port;
  server.backlog = backlog;




}
