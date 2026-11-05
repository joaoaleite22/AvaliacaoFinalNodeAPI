import ServiceAtendimento from '../service/atendimento.js'

class ControllerAtendimento {

    async Buscar(req, res) {
        try {
            const dias = await ServiceAtendimento.Buscar()

            res.send({ dias })
        } catch (e) {
            res.send({ message: e.message })
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const dia = ServiceAtendimento.BuscarUm(id)

            res.send({ dia })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const dia = req.body.dia
            const hora = req.body.hora
            const valor = req.body.valor
            const concluido = req.body.concluido

            await ServiceAtendimento.Criar(dia, hora, valor, concluido)

            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    async Alterar(req, res) {
        try {
            const id = req.params.id
            const dia = req.body.dia
            const hora = req.body.hora
            const valor = req.body.valor
            const concluido = req.body.concluido
            await ServiceAtendimento.Alterar(id, dia, hora, valor, concluido)

            res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

        async AlterarAtendimento(req, res) {
        try {
            const id = req.params.id
            await ServiceAtendimento.Alterar(id)

            res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    async Deletar(req, res) {
        try {
            const id = req.params.id
            await ServiceAtendimento.Deletar(id)
            
            res.send({ message: "Deletado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

}

export default new ControllerAtendimento()