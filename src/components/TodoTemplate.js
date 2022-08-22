import "./TodoTemplate.scss";

const TodoTemplate = ({children}) => {
    let today = new Date();   

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let day = today.getDate();  // 날짜

    let date = year+"/"+(("00"+month.toString()).slice(-2))+"/"+(("00"+day.toString()).slice(-2));
    
    return (
        <div className ="TodoTemplate">
            <div className="app-title">일정관리
            <p className="app-date">{date}</p>
            </div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;