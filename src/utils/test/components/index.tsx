import Card from "../../../components/Card"
import useShop from "../../../hooks/useShop"

export const CardComponentTest = () => {
    const { addItem, removeItem } = useShop();
    const fakeData = {
        name: 'Test',
        path: 'https://localhost',
        price: 20,
        id: 'test-2-0',
        qnt: 1
    };

    return (
        <Card
            onClickAdd={addItem}
            onClickRemove={removeItem}
            {...fakeData}
        />
    )
}