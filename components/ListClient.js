const ListClient = Vue.component('list-client', {
    template: /* html */ `
        <table>
            <thead>
                <th>Nome</th>
                <th>Email</th>
                <th>CPF</th>
            </thead>
            <tbody>
                <tr v-for="c in clients">
                    <td>{{ c.name }}</td>
                    <td>{{ c.email }}</td>
                    <td>{{ c.cpf }}</td>
                </tr>
            </tbody>
        </table>    
    `,
    data() {
        return {
            clients: []
        }

    },
    methods: {
        listAll() {
            this.clients = ClientService.findAll()
        }
    },
    created() {
        this.listAll()
    }
})