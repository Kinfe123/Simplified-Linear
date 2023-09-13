export const load = async (event) => {
    const {locals} = event
    const {getSession} = locals
    return {
        session: await getSession()
    }
 }