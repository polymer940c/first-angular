import { Component } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html"
})

export class ServerComponent {
    // you can use TS and set the type
    serverId: number = 10;
    // or you don't have to
    serverStatus = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline"
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === "online" ? "green" : "red";
    }
}
