const FormClient = Vue.component('form-client', {
    template: /* html */ `
        <form>
            <input type="text" placeholder="Nome do cliente" v-model="client.name">
            <input type="email" placeholder="Email do cliente" v-model="client.email">
            <input type="number" placeholder="CPF do cliente" v-model="client.cpf">
            <button type="button" @click="save">Salvar</button>
            <button type="button" @click="cancel">Cancelar</button>
            <br>
        </form>
    `,
    props: ["client"],
    methods: {
        save() {
            ClientService.create(this.client)
            this.$emit('saved')
        },
        cancel() {
            this.$emit('cancel') 
        }
        

    }
})