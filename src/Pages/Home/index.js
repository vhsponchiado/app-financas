import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import { StyleSheet, Text, View, FlatList } from 'react-native';



const list = [
    {
        id: 1,
        label: 'Boleto: Conta de Luz',
        value: '390,90',
        date: '18/07/2022',
        type: 0 //despezas
    },

    {
        id: 2,
        label: 'Pix Cliente X',
        value: '120,50',
        date: '20/07/2022',
        type: 1 //despezas
    },
    {
        id: 3,
        label: 'Salário',
        value: '7.500,00',
        date: '01/08/2022',
        type: 1 //despezas
    }
]


export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Vinícius Sponchiado" />
            <Balance saldo="8.500,00" gastos="-567,00" />
            <Text style={styles.title}>Últimas movimentações</Text>

            <FlatList style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Movements data={item} />} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 14,
    },

    list: {
        marginStart: 14,
        marginEnd: 14,
    }
})
