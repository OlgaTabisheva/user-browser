import './Partner.css'
import {PartnerHeader} from "../../components/PartnerHeader/PartnerHeader";
import mail from "../../images/Mail.svg";
import phone from "../../images/Phone.svg";
import {Header} from "../../components/Header/Header";


export const Partner = () => {
  return (
    <section className='partner'>
      <Header/>
      <PartnerHeader/>
      <div className='partner__box'>
        <div className='partner__description'>
            Клиенты видят в нем эксперта по вопросам разработки
            комплексных решений финансовых продуктов, включая такие
            аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше
            понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать
            продажи, используя самые современные аналитические инструменты.
          <br/><br/>
          В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не
            менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты
            помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания
            проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".
          <br/><br/>
          Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую
            деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей
            инновационный подход к красоте, а также инвестором других бизнес-проектов.
          </div>
        <div className='partner__contacts'>
          <div className='partner__contact'>
            <img className='partner__image' src={phone}/>
            <p className='partner__text'>+7 (954) 333-44-55</p>
          </div>
          <div className='partner__contact'>
            <img className='partner__image' src={mail}/>
            <p className='partner__text'>sykfafkar@gmail.com</p>
          </div>

        </div>
      </div>
    </section>
  );
};