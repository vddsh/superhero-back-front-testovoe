import React, {useEffect, useState} from 'react';
import SuperHeroCard from '../../components/SuperHeroCard';
import Modal from '../../components/Modal';
import PageNavigationBtn from '../../components/PageNavigationBtn';
import CreateHeroBtn from '../../components/CreateHeroBtn';
import {fetchSuperHeroes, postSuperHero} from '../../store/superHeroes/superHeroes.slice';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {ISuperHeroes} from '../../model/model';



const HeroPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const {superHeroes}: { superHeroes: ISuperHeroes } = useTypedSelector(state => state);
  const [page, setPage] = useState<number>(1);
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchSuperHeroes(page));
  }, [page, modal]);

  const nextPage = (): void => setPage(Math.max(1, page - 1));
  const prevPage = (): void => setPage(Math.min(superHeroes.totalPages, page + 1));

  const handleSubmitModalPost = async (event: React.SyntheticEvent): Promise<void> => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const data = await new FormData(target);
    dispatch(postSuperHero(data));
    setModal(!modal);
  };


  if (modal) {
    return (<Modal handleSubmitModalPost={handleSubmitModalPost} modal={modal} setModal={setModal}/>);
  } else {
    return (
      <div className='p-10 flex flex-col items-center justify-center'>
        <div className='flex'>
          {superHeroes && superHeroes.data.map(superHero => <SuperHeroCard
            key={superHero._id} superHero={superHero}/>)}
        </div>
        <div className='py-20 flex flex-col'>
          <CreateHeroBtn modal={modal} setModal={setModal} label={'Create Hero'}/>
          <PageNavigationBtn nextPage={nextPage} prevPage={prevPage}/>
        </div>
      </div>
    );
  }
};

export default HeroPage;
