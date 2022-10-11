//Import Graphql Yoga Server
import {server} from './server.js'

//Import database connection
import "./database.js";

server.start( { port: 4000 }, ( { port } ) => {
    console.log( "Server on port", port )
} );
