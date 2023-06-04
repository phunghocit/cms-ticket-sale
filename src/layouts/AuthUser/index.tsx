import { useEffect, useState } from 'react';
import { AuthUserForm, Bell, Mail, Signal, UserInfo} from './styles';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../firebase/firebase-config';
import SearchBox from '../../components/SearchBox';

const AuthUser = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);


  const imagesListRef2 = ref(storage, 'add.png');
    
  useEffect(() => {
        getDownloadURL(imagesListRef2).then((url) => {
        setImageUrls((prev:any) => [...prev, url]);
        });
      },[]);

    return (
      <AuthUserForm>
        <SearchBox />
        <Signal>
            <Mail />
            <Bell />
        </Signal>
        <UserInfo>
          {imageUrls.map((url) => {
              return <img src={url} />;
            })}
        </UserInfo>
      </AuthUserForm>
    );
}

export default AuthUser;