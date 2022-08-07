export type productType = {
    id: string,
    name: string,
    path: string,
    price: number
}

export type products = productType & {
    Comments: {
        comment: string,
        username: string,
    }[]

};


export type user = {
    id: string,
    name: string,
    email: string,
}

export type comment = {
    id: string,
    username: string,
    productId: string,
    comment: string
}
export type createCommentType = {
    username: string,
    productId: string,
    comment: string
}

export type createUserType = {
    name: string,
    email: string,
    password: string
}

export type ContextTypeAuth = {
    user?: user,
    authenticate: (email: string, password: string, isExpire?: boolean) => Promise<void>,
    logout: () => void,
    onLoading: boolean
}

export type TokenUserType = {
    token?: string,
    expire?: boolean
}

export type shopType = productType & {
    qnt: number
}

export type shopItemType = {
    products: shopType[],
    total: number
}

export type ContextTypeShop = {
    addItem: (product: productType) => void,
    removeItem: (product: shopType) => void,
    shop: shopItemType | null
}


