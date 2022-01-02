import { BsArrowUp, BsArrowDown} from 'react-icons/bs'

export const userData = [
    {
        name: 'Jan',
        "active user": 4000,
    },
    {
        name: 'Feb',
        "active user": 3000,
    },
    {
        name: 'Mar',
        "active user": 2000,
    },
    {
        name: 'Apr',
        "active user": 2780,
    },
    {
        name: 'May',
        "active user": 1890,

    },
    {
        name: 'jun',
        "active user": 2390,

    },

    {
        name: 'jul',
        "active user": 3490,
    },
    {
        name: 'Aug',
        "active user": 4500,
    },
    {
        name: 'Sep',
        "active user": 5000,
    },
    {
        name: 'Oct',
        "active user": 4200,
    },
    {
        name: 'Nov',
        "active user": 6000,
    },
    {
        name: 'Dec',
        "active user": 5220,
    },
];

export const userRows = [
    {
        id: 1, username: 'Jon Snow',
        avatar: "https://4.bp.blogspot.com/-AnVnBfTq3J4/T1uEVoq2EMI/AAAAAAAAD-E/zQkoxix5xaw/s1600/kate-winslet-800-75.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 2, username: 'Madly',
        avatar: "https://4.bp.blogspot.com/_8sFgnGHvBOY/TBEtaZzPJdI/AAAAAAAAAqg/Tbjq4VgP5RE/s1600/hilary+now.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 3, username: 'Ricky Roy',
        avatar: "https://i.ytimg.com/vi/ICT4A5lnrh4/maxresdefault.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 4, username: 'Jhon Sinha',
        avatar: "https://4.bp.blogspot.com/-AnVnBfTq3J4/T1uEVoq2EMI/AAAAAAAAD-E/zQkoxix5xaw/s1600/kate-winslet-800-75.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 5, username: 'Watson flik',
        avatar: "https://4.bp.blogspot.com/_8sFgnGHvBOY/TBEtaZzPJdI/AAAAAAAAAqg/Tbjq4VgP5RE/s1600/hilary+now.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 6, username: 'Rosa Roandy',
        avatar: "http://4.bp.blogspot.com/-zRePsYRNSV8/UoSk05jkUhI/AAAAAAAAGc8/KPoX0F-18PA/s1600/scarlett-johansson-unseen-hot-pic-Fashion.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 7, username: 'Camibli',
        avatar: "https://i.ytimg.com/vi/ICT4A5lnrh4/maxresdefault.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 8, username: 'Nora Sis',
        avatar: "https://4.bp.blogspot.com/-AnVnBfTq3J4/T1uEVoq2EMI/AAAAAAAAD-E/zQkoxix5xaw/s1600/kate-winslet-800-75.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 9, username: 'Lenka Pake',
        avatar: "https://4.bp.blogspot.com/_8sFgnGHvBOY/TBEtaZzPJdI/AAAAAAAAAqg/Tbjq4VgP5RE/s1600/hilary+now.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 10, username: 'Andy Watson',
        avatar: "http://4.bp.blogspot.com/-zRePsYRNSV8/UoSk05jkUhI/AAAAAAAAGc8/KPoX0F-18PA/s1600/scarlett-johansson-unseen-hot-pic-Fashion.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 11, username: 'Nocol Tesla',
        avatar: "https://4.bp.blogspot.com/-AnVnBfTq3J4/T1uEVoq2EMI/AAAAAAAAD-E/zQkoxix5xaw/s1600/kate-winslet-800-75.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 12, username: 'Sudhir Bansal',
        avatar: "https://i.ytimg.com/vi/ICT4A5lnrh4/maxresdefault.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 13, username: 'James Bond',
        avatar: "http://4.bp.blogspot.com/-zRePsYRNSV8/UoSk05jkUhI/AAAAAAAAGc8/KPoX0F-18PA/s1600/scarlett-johansson-unseen-hot-pic-Fashion.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },

];

export const featuredData = [
    {
        title: "Revenue",
        price: "$1,567",
        rate: "-11.4",
        icon : () => {
            if (this.rate >= 0)
                return <BsArrowUp/>
            else
                return <BsArrowDown/>
        }
    },
    {
        title: "Sales",
        price: "$1,567",
        rate: "-11.4",
        icon : () => {
            if (this.rate >= 0)
                return <BsArrowUp/>
            else
                return <BsArrowDown/>
        }
    },
    {
        title: "Cost",
        price: "$1,567",
        rate: "+3.4",
        icon : () => {
            if (this.rate >= 0)
                return <BsArrowUp/>
            else
                return <BsArrowDown/>
        }
    }
]