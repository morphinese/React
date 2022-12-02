import React, { useEffect, useState } from 'react'
import Tours from './Tours'

const data = [
    {
        id: '0',
        name: 'Найкращий Париж за 7 днів',
        info: 'Париж є синонімом найкращого, що може запропонувати культура — у мистецтві, моді, їжі, літературі та ідеях. Під час цієї екскурсії ваш гід Рік Стівс, який знає Париж, занурить вас у найкраще Місто Світла : заповнені шедеврами музеї Лувр і Орсе, стійкий собор Паризької Богоматері, вишукана Сент-Шапель і екстравагантний Версальський палац Ви також зможете насолоджуватися прогулянками історичним центром міста з гідом, а також тихими моментами, щоб сповільнитися та насолодитися затишні кафе міста, барвисті ринки та радість життя. Приєднуйтесь до нас, щоб побачити найкраще в Парижі за 7 днів!',
        image: 'https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg',
        price: '1,995'
    },
    {
        id: '1',
        name: 'Найкраще з Ірландії за 14 днів',
        info: 'Тур Ріка Стівса Best of Ireland розпочинається з найкращого Дубліна, а потім відвідування історичних пам’яток Ірландії, чарівних містечок, музичних пабів і приморських місць, включаючи Кінсейл, півострів Дінгл, скелі Мохер. , Аранські острови, Голвей, Коннемара, Дорога велетнів і чарівне місто Белфаст. По дорозі гіди Ріка розповідатимуть свої історії, щоб залучити вас до Смарагдового острова, а доброзичливість людей точно вкраде ваше серце . Приєднуйтесь до нас, щоб отримати найкраще в Ірландії за 14 днів!',
        image: 'https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg',
        price: '3,895'
    },
    {
        id: '2',
        name: 'Найкраще з Зальцбурга та Відня за 8 днів',
        info: 'Давайте поїдемо туди, де класична музика, високі замки та пейзажі-пагорби вітають вас у gemütlichkeit Баварії та розкоші золотого віку Австрії. Ваш гід Ріка Стівса оживить багату історію та культуру цього регіону святковий Мюнхен, бароковий Зальцбург, блискуче озеро Гальштат, монастир Мельк, блакитний Дунай і королівський Відень — із затишними селами та альпійськими видами на всьому шляху. Приєднуйтесь до нас, щоб побачити найкраще з Мюнхена, Зальцбурга та Відня за 8 днів!',
        image: 'https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg',
        price: '2,695'
    },
    {
        id: '3',
        name: 'Найкращий Рим за 7 днів',
        info: 'Наша екскурсія по Риму пропонує вам найп’янкіший напій у Європі, який складається з приголомшливого мистецтва, карколомної історії та стильного міського життя. Під час цієї відпустки в Римі ваш гід відродить велич Колізею, Форуму, Пантеону та прилеглих стародавніх Римів. Антична Остія. Від епох Відродження та бароко ви зможете захопитися базилікою Святого Петра, музеями Ватикану, Сикстинською капелою та галереєю Боргезе. Ви також насолодитесь сучасним Римом із пішохідними екскурсіями, пам’ятними ресторанами та часом, щоб досліджуйте самостійно. Приєднуйтесь до нас, щоб отримати найкраще в Римі за 7 днів!',
        image: 'https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg',
        price: '2,095'
    },
    {
        id: 'receAEzz86KzW2gvH',
        name: 'Найкраще з Польщі за 10 днів',
        info: 'Починаючи з барвистого портового міста Гданськ, ви втечете від натовпу та відчуєте стриману елегантність готової до прайм-тайму Польщі протягом 10 днів. З гідом-експертом Ріком Стівсом ви відчуєте могутній замок Мальборк, симпатичне бруковане село Торунь, сучасна столиця Польщі Варшава, духовний монастир Ясна Гура та чарівний Краків — найкраще місто Польщі У цій країні сюрпризів — такій модній і модній, але насиченій історією — є так багато чого відкрити. Приєднуйтесь до нас, щоб отримати найкраще в Польщі за 10 днів!',
        image: 'https://dl.airtable.com/.attachments/3feee7a93af0f4f809312132090c9a80/58e3e8ec/poland.jpeg',
        price: '2,595'
    }
]

function App() {
    const [tours, setTours] = useState([])

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id)

        setTours(newTours)
    }

    const fetchTours = () => {
        setTours(data)
    }

    useEffect(() => {
        fetchTours()
    }, [])

    return (
        <main>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    )
}

export default App
