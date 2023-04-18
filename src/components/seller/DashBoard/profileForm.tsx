import { Flex } from "@chakra-ui/react"
import FormInput from "../../common/formInput";
import SelectInput from "../../common/selectInput";

const list = [
    'Friday, March 17, 2023 (EDT) Time in New York, NY, USA',
    'Sunday, March 27, 2023 (GMT) Time in London, UK, UK'
]

const ProfileForm = ({formdata, handleChange}) => {

    const handleVerification = (val) => {

    }
    const handleList = (event) => {

    }

    return(
    <Flex w='100%' flexDirection={'column'}  gap={'10px'} >
        <FormInput name="name" handleChange={handleChange} title={'Name'} type={'text'} value={formdata.name} placeHolder={'Full name'} />
        <FormInput name="businessName" handleChange={handleChange} title={'Business Name'} type={'text'} value={formdata.businessName} placeHolder={'Company name'} />
        <FormInput name="address" handleChange={handleChange} title={'Address'} type={'text'} value={formdata.address} placeHolder={'Street'} />
        <FormInput name="email" handleChange={handleChange} title={'Email address'} type={'email'} value={formdata.email} placeHolder={'Email address'} handleVerification={handleVerification}  />
        <FormInput name="phone" handleChange={handleChange} title={'Phone Number'} type={'text'} value={formdata.phone} placeHolder={'Number'} handleVerification={handleVerification} />
        <FormInput name="businessId" handleChange={handleChange} title={'Business Verification ID'} type={'text'} value={formdata.businessId} placeHolder={'ID'} handleVerification={handleVerification} />
        <SelectInput name="address" handleChange={handleList} list={list} title={'Address'}  value={list[0]} placeHolder={'Street'} />

    </Flex>)

}

export default ProfileForm;