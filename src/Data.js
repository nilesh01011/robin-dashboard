import { MdAdminPanelSettings, MdStars } from 'react-icons/md'
import { BiUserPin } from 'react-icons/bi'
import { AiFillCar } from 'react-icons/ai'
import { FaShapes } from 'react-icons/fa'
import { HiCurrencyRupee, HiUsers } from 'react-icons/hi'

let theme = localStorage.getItem('theme');

// dashboard navigations
export const dashboardNavTabs = [
    {
        id: 1,
        title: 'FAVORITES',
        icons: <MdStars size={22} />,
        setDropdown: true,
        lists: [
            {
                id: 1.1,
                heading: 'Dashboard',
                active: true
            },
            {
                id: 1.2,
                heading: 'Terms and Conditions'
            },
            {
                id: 1.3,
                heading: 'Manufacturer Hierarchy'
            },
            {
                id: 1.4,
                heading: 'Customer Master'
            }
        ]
    },
    {
        id: 2,
        title: 'PRE SALES',
        icons: <BiUserPin size={22} />,
    },
    {
        id: 3,
        title: 'SALES',
        icons: <AiFillCar size={22} />,
    },
    {
        id: 4,
        title: 'PARTS',
        icons: <FaShapes size={20} />,
    },
    {
        id: 5,
        title: 'SERVICE',
        icons: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 20" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.07239 4.37937C1.15671 5.74978 0.667969 7.36094 0.667969 9.00912C0.667969 11.2193 1.54594 13.3389 3.10875 14.9017C4.67155 16.4645 6.79116 17.3425 9.0013 17.3425C10.6495 17.3425 12.2606 16.8537 13.6311 15.938C15.0015 15.0224 16.0696 13.7209 16.7003 12.1981C17.331 10.6754 17.4961 8.99987 17.1745 7.38337C16.853 5.76686 16.0593 4.282 14.8939 3.11656C13.7284 1.95112 12.2436 1.15745 10.6271 0.835908C9.01055 0.514364 7.33499 0.679392 5.81227 1.31012C4.28956 1.94085 2.98807 3.00896 2.07239 4.37937ZM11.9185 13.0846L13.0852 11.918C13.1615 11.8401 13.2043 11.7354 13.2043 11.6263C13.2043 11.5172 13.1615 11.4125 13.0852 11.3346L10.2435 8.49297C10.4418 7.94282 10.4682 7.34535 10.319 6.7799C10.1698 6.21444 9.85208 5.70774 9.40812 5.32707C8.96416 4.94641 8.41492 4.70978 7.83331 4.64862C7.25171 4.58746 6.66526 4.70465 6.15182 4.98464L8.11016 6.93464L6.93516 8.10964L4.97682 6.1513C4.69684 6.66474 4.57965 7.25119 4.64081 7.83279C4.70197 8.4144 4.93859 8.96364 5.31926 9.4076C5.69992 9.85156 6.20662 10.1692 6.77208 10.3184C7.33754 10.4676 7.93501 10.4413 8.48516 10.243L11.3268 13.0846C11.3656 13.1237 11.4116 13.1547 11.4624 13.1758C11.5132 13.197 11.5677 13.2079 11.6227 13.2079C11.6777 13.2079 11.7321 13.197 11.7829 13.1758C11.8337 13.1547 11.8798 13.1237 11.9185 13.0846Z" fill={`${theme === 'dark' ? 'white' : 'black'}`} />
        </svg>,
    },
    {
        id: 6,
        title: 'CRM',
        icons: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 20" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H15.8333C16.275 17.4987 16.6981 17.3227 17.0104 17.0104C17.3227 16.6981 17.4987 16.275 17.5 15.8333V4.16667C17.5 3.72464 17.3244 3.30072 17.0118 2.98816C16.6993 2.67559 16.2754 2.5 15.8333 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118ZM4.16797 15.834H15.8346V5.83398H4.16797V15.834Z" fill={`${theme === 'dark' ? 'white' : 'black'}`} />
            <path d="M14.1654 9.99967H5.83203V8.33301H14.1654V9.99967Z" fill={`${theme === 'dark' ? 'white' : 'black'}`} />
            <path d="M10.832 13.3337H5.83203V11.667H10.832V13.3337Z" fill={`${theme === 'dark' ? 'white' : 'black'}`} />
        </svg>
    },
    {
        id: 7,
        title: 'FINANCE',
        icons: <HiCurrencyRupee size={22} />,
    },
    {
        id: 8,
        title: 'HR',
        icons: <HiUsers size={22} />,
    },
    {
        id: 9,
        title: 'ADMIN',
        icons: <MdAdminPanelSettings size={22} />,
    }
]

// main body contents

// sales
export const salesContent = [
    {
        id: 1,
        counts: 175,
        name: 'Hot Enquiries (MTD)'
    },
    {
        id: 2,
        counts: 89,
        name: 'Vehicle Retail (MTD)'
    },
    {
        id: 3,
        counts: 121,
        name: 'Opening Vehicle Stock'
    }
]

// parts
export const partsContent = [
    {
        id: 1,
        counts: 175,
        name: 'Spareparts Sales',
        name2: '(MTD Rs. Lakhs)'
    },
    {
        id: 2,
        counts: 89,
        name: 'Accessories Sales',
        name2: '(MTD Rs.Lakhs)'
    },
    {
        id: 3,
        counts: 121,
        name: 'Total Inventory Cost',
        name2: '(Landed) (Rs. Lakhs)'
    }
]

// service
export const serviceContent = [
    {
        id: 1,
        counts: 24,
        name: 'Pending Jobcards'
    },
    {
        id: 2,
        counts: 12,
        name: 'Today’s Appoinments'
    },
    {
        id: 3,
        counts: 5,
        name: 'Pending Claims'
    }
]

// CRM
export const crmContent = [
    {
        id: 1,
        counts: 12,
        name: 'Pending Complaints'
    },
    {
        id: 2,
        counts: 1.2,
        name: 'CSI (%)'
    },
    {
        id: 3,
        counts: 4.2,
        name: 'SSI (%)'
    },
    {
        id: 4,
        counts: 15,
        name: 'Follow ups for the Day'
    }
]

// right side Upcomming training

export const news = [
    {
        id: 1,
        title: '27th June 2021 - Competitor Watch',
        description: 'Short description goes here lorem ipsum..'
    },
    {
        id: 2,
        title: '28th June 2021 - Competitor Watch',
        description: 'Short description goes here lorem ipsum lorem..'
    },
    {
        id: 3,
        title: '29th June 2021 - Competitor Watch',
        description: 'Short description goes here lorem ipsum lorem'
    },
]

export const upCommingTraining = [
    {
        id: 1,
        title: 'Acme Training 2 (20th Sep 2021)',
        description: 'Short description goes here lorem ipsum'
    },
    {
        id: 2,
        title: 'Acme Training 1 (07th Oct 2021)',
        description: 'Short description goes here lorem ipsum'
    },
    {
        id: 3,
        title: 'Acme Training 3 (25th Oct 2021)',
        description: 'Short description goes here lorem ipsum'
    },
]

export const data = [
    {
        id: 1,
        customerId: 9817239,
        name: 'John Doe',
        customerTYpe: 'Individual',
        mobile: 9664321226,
        email: 'johndoe@mahindra.com',
        memberTYpe: 'Golden',
        action: 1,

        enquiryNo: 12309183,
        customerType: 'Firm/Company',
        dummyMajor: 'C1',
        corporateType: 'Non-Listed',
        corporateName: 'Koncept Private Limited',
        applicationCategory: 'Usage Dummy Category',
        applicationSubCategory: 'Usage Dummy Category',
        customerCategory: 'Fleet',
        bussinessDetails: 'Dummy Business Details',
        vehicleDetails: 'Dummy Vehicle Details',
        roleDetails: 'Dummy Role Details',
        routeDetails: 'Dummy Major Route Details',

        accountCode: 'CFG464787',
        accountName: 'Koncept',
        accountSegment: 'Firm',
        accountClientName: 'Pal Singh',
        accountMappingDate: 'Corporate Name',

        numberPerson: 'Vimal Kumar',
        position: 'Manager',
        companyName: 'Koncept',
        remark: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and Dummy'
    },
    {
        id: 2,
        customerId: 9817239,
        name: 'John Doe',
        customerTYpe: 'Individual',
        mobile: 9664321226,
        email: 'johndoe@mahindra.com',
        memberTYpe: 'Golden',
        action: 2,
        enquiryNo: 12309183,
        customerType: 'Firm/Company',
        dummyMajor: 'C1',
        corporateType: 'Non-Listed',
        corporateName: 'Koncept Private Limited',
        applicationCategory: 'Usage Dummy Category',
        applicationSubCategory: 'Usage Dummy Category',
        customerCategory: 'Fleet',
        bussinessDetails: 'Dummy Business Details',
        vehicleDetails: 'Dummy Vehicle Details',
        roleDetails: 'Dummy Role Details',
        routeDetails: 'Dummy Major Route Details',

        accountCode: 'CFG464787',
        accountName: 'Koncept',
        accountSegment: 'Firm',
        accountClientName: 'Pal Singh',
        accountMappingDate: 'Corporate Name',

        numberPerson: 'Vimal Kumar',
        position: 'Manager',
        companyName: 'Koncept',
        remark: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and Dummy'
    },
    {
        id: 3,
        customerId: 9817239,
        name: 'John Doe',
        customerTYpe: 'Individual',
        mobile: 9664321226,
        email: 'johndoe@mahindra.com',
        memberTYpe: 'Golden',
        action: 3,

        enquiryNo: 12309183,
        customerType: 'Firm/Company',
        dummyMajor: 'C1',
        corporateType: 'Non-Listed',
        corporateName: 'Koncept Private Limited',
        applicationCategory: 'Usage Dummy Category',
        applicationSubCategory: 'Usage Dummy Category',
        customerCategory: 'Fleet',
        bussinessDetails: 'Dummy Business Details',
        vehicleDetails: 'Dummy Vehicle Details',
        roleDetails: 'Dummy Role Details',
        routeDetails: 'Dummy Major Route Details',

        accountCode: 'CFG464787',
        accountName: 'Koncept',
        accountSegment: 'Firm',
        accountClientName: 'Pal Singh',
        accountMappingDate: 'Corporate Name',

        numberPerson: 'Vimal Kumar',
        position: 'Manager',
        companyName: 'Koncept',
        remark: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and Dummy'
    },
    {
        id: 4,
        customerId: 9817239,
        name: 'John Doe',
        customerTYpe: 'Individual',
        mobile: 9664321226,
        email: 'johndoe@mahindra.com',
        memberTYpe: 'Golden',
        action: 4,

        enquiryNo: 12309183,
        customerType: 'Firm/Company',
        dummyMajor: 'C1',
        corporateType: 'Non-Listed',
        corporateName: 'Koncept Private Limited',
        applicationCategory: 'Usage Dummy Category',
        applicationSubCategory: 'Usage Dummy Category',
        customerCategory: 'Fleet',
        bussinessDetails: 'Dummy Business Details',
        vehicleDetails: 'Dummy Vehicle Details',
        roleDetails: 'Dummy Role Details',
        routeDetails: 'Dummy Major Route Details',

        accountCode: 'CFG464787',
        accountName: 'Koncept',
        accountSegment: 'Firm',
        accountClientName: 'Pal Singh',
        accountMappingDate: 'Corporate Name',

        numberPerson: 'Vimal Kumar',
        position: 'Manager',
        companyName: 'Koncept',
        remark: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and Dummy'
    },
    {
        id: 5,
        customerId: 9817239,
        name: 'John Doe',
        customerTYpe: 'Individual',
        mobile: 9664321226,
        email: 'johndoe@mahindra.com',
        memberTYpe: 'Golden',
        action: 5,

        enquiryNo: 12309183,
        customerType: 'Firm/Company',
        dummyMajor: 'C1',
        corporateType: 'Non-Listed',
        corporateName: 'Koncept Private Limited',
        applicationCategory: 'Usage Dummy Category',
        applicationSubCategory: 'Usage Dummy Category',
        customerCategory: 'Fleet',
        bussinessDetails: 'Dummy Business Details',
        vehicleDetails: 'Dummy Vehicle Details',
        roleDetails: 'Dummy Role Details',
        routeDetails: 'Dummy Major Route Details ',

        accountCode: 'CFG464787',
        accountName: 'Koncept',
        accountSegment: 'Firm',
        accountClientName: 'Pal Singh',
        accountMappingDate: 'Corporate Name',

        numberPerson: 'Vimal Kumar',
        position: 'Manager',
        companyName: 'Koncept',
        remark: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and Dummy'
    },
    {
        id: 6,
        customerId: 9817239,
        name: 'John Doe',
        customerTYpe: 'Individual',
        mobile: 9664321226,
        email: 'johndoe@mahindra.com',
        memberTYpe: 'Golden',
        action: 6,

        enquiryNo: 12309183,
        customerType: 'Firm/Company',
        dummyMajor: 'C1',
        corporateType: 'Non-Listed',
        corporateName: 'Koncept Private Limited',
        applicationCategory: 'Usage Dummy Category',
        applicationSubCategory: 'Usage Dummy Category',
        customerCategory: 'Fleet',
        bussinessDetails: 'Dummy Business Details',
        vehicleDetails: 'Dummy Vehicle Details',
        roleDetails: 'Dummy Role Details',
        routeDetails: 'Dummy Major Route Details ',

        accountCode: 'CFG464787',
        accountName: 'Koncept',
        accountSegment: 'Firm',
        accountClientName: 'Pal Singh',
        accountMappingDate: 'Corporate Name',

        numberPerson: 'Vimal Kumar',
        position: 'Manager',
        companyName: 'Koncept',
        remark: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and Dummy'
    },
    {
        id: 7,
        customerId: 9817239,
        name: 'John Doe',
        customerTYpe: 'Individual',
        mobile: 9664321226,
        email: 'johndoe@mahindra.com',
        memberTYpe: 'Golden',
        action: 7,

        enquiryNo: 12309183,
        customerType: 'Firm/Company',
        dummyMajor: 'C1',
        corporateType: 'Non-Listed',
        corporateName: 'Koncept Private Limited',
        applicationCategory: 'Usage Dummy Category',
        applicationSubCategory: 'Usage Dummy Category',
        customerCategory: 'Fleet',
        bussinessDetails: 'Dummy Business Details',
        vehicleDetails: 'Dummy Vehicle Details',
        roleDetails: 'Dummy Role Details',
        routeDetails: 'Dummy Major Route Details ',

        accountCode: 'CFG464787',
        accountName: 'Koncept',
        accountSegment: 'Firm',
        accountClientName: 'Pal Singh',
        accountMappingDate: 'Corporate Name',

        numberPerson: 'Vimal Kumar',
        position: 'Manager',
        companyName: 'Koncept',
        remark: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and Dummy'
    },
    {
        id: 8,
        customerId: 9817239,
        name: 'John Doe',
        customerTYpe: 'Individual',
        mobile: 9664321226,
        email: 'johndoe@mahindra.com',
        memberTYpe: 'Golden',
        action: 8,

        enquiryNo: 12309183,
        customerType: 'Firm/Company',
        dummyMajor: 'C1',
        corporateType: 'Non-Listed',
        corporateName: 'Koncept Private Limited',
        applicationCategory: 'Usage Dummy Category',
        applicationSubCategory: 'Usage Dummy Category',
        customerCategory: 'Fleet',
        bussinessDetails: 'Dummy Business Details',
        vehicleDetails: 'Dummy Vehicle Details',
        roleDetails: 'Dummy Role Details',
        routeDetails: 'Dummy Major Route Details ',

        accountCode: 'CFG464787',
        accountName: 'Koncept',
        accountSegment: 'Firm',
        accountClientName: 'Pal Singh',
        accountMappingDate: 'Corporate Name',

        numberPerson: 'Vimal Kumar',
        position: 'Manager',
        companyName: 'Koncept',
        remark: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and Dummy'
    },
    {
        id: 9,
        customerId: 9817239,
        name: 'John Doe',
        customerTYpe: 'Individual',
        mobile: 9664321226,
        email: 'johndoe@mahindra.com',
        memberTYpe: 'Golden',
        action: 9,

        enquiryNo: 12309183,
        customerType: 'Firm/Company',
        dummyMajor: 'C1',
        corporateType: 'Non-Listed',
        corporateName: 'Koncept Private Limited',
        applicationCategory: 'Usage Dummy Category',
        applicationSubCategory: 'Usage Dummy Category',
        customerCategory: 'Fleet',
        bussinessDetails: 'Dummy Business Details',
        vehicleDetails: 'Dummy Vehicle Details',
        roleDetails: 'Dummy Role Details',
        routeDetails: 'Dummy Major Route Details ',

        accountCode: 'CFG464787',
        accountName: 'Koncept',
        accountSegment: 'Firm',
        accountClientName: 'Pal Singh',
        accountMappingDate: 'Corporate Name',

        numberPerson: 'Vimal Kumar',
        position: 'Manager',
        companyName: 'Koncept',
        remark: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and Dummy'
    },
    {
        id: 10,
        customerId: 9817239,
        name: 'John Doe',
        customerTYpe: 'Individual',
        mobile: 9664321226,
        email: 'johndoe@mahindra.com',
        memberTYpe: 'Golden',
        action: 10,

        enquiryNo: 12309183,
        customerType: 'Firm/Company',
        dummyMajor: 'C1',
        corporateType: 'Non-Listed',
        corporateName: 'Koncept Private Limited',
        applicationCategory: 'Usage Dummy Category',
        applicationSubCategory: 'Usage Dummy Category',
        customerCategory: 'Fleet',
        bussinessDetails: 'Dummy Business Details',
        vehicleDetails: 'Dummy Vehicle Details',
        roleDetails: 'Dummy Role Details',
        routeDetails: 'Dummy Major Route Details ',

        accountCode: 'CFG464787',
        accountName: 'Koncept',
        accountSegment: 'Firm',
        accountClientName: 'Pal Singh',
        accountMappingDate: 'Corporate Name',

        numberPerson: 'Vimal Kumar',
        position: 'Manager',
        companyName: 'Koncept',
        remark: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and Dummy'
    }
]