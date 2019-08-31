class ClientService {
    static create(client) {
        let clients = ClientService.findAll()
        clients.push(client)
        localStorage.setItem('clients', JSON.stringify(clients))
    }

    static update() {

    }
    
    static findAll() {
        let clients = JSON.parse(localStorage.getItem('clients'))
        if(clients){
            return clients
        }else {
            return []
        }
    }

    static remove() {

    }
}