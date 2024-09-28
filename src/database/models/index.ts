import ConsultationRequest, {
    ConsultationRequestAttributes,
    ConsultationRequestCreationAttributes
} from "@src/database/models/ConsultationRequest/Model";
import Blog, {BlogAttributes, BlogCreationAttributes} from "@src/database/models/Blog/Model";
import Account, {AccountAttributes, AccountCreationAttributes} from "@src/database/models/Account/Model";

const syncModel = async () => {
    const models = [
        ConsultationRequest,
        Blog,
        Account
    ]
    for (const model of models) {
        await model.sync({force: false})
    }
}

export {
    Blog,
    Account,
    ConsultationRequest,
    syncModel
}

export type {
    ConsultationRequestAttributes,
    ConsultationRequestCreationAttributes,
    BlogAttributes,
    BlogCreationAttributes,
    AccountAttributes,
    AccountCreationAttributes
}

