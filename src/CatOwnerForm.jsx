import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class CatOwnerForm extends React.Component {
  state = {
    custName: "",
    custMail: "",
    custTel: "",
    catsName: "",
    breed: "британская коротошорстная",
    favoriteFood: [],
    sex: "",
    age: "",
    comment: "",
  };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue =
      type === "checkbox"
        ? this.handleCheckboxChange(name, value, checked)
        : value;
    this.setState({ [name]: newValue });
  };

  handleCheckboxChange = (name, value, checked) => {
    const { favoriteFood } = this.state;
    let updatedFavoriteFood;

    if (checked) {
      updatedFavoriteFood = [...favoriteFood, value];
    } else {
      updatedFavoriteFood = favoriteFood.filter((food) => food !== value);
    }

    return updatedFavoriteFood;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      custName,
      custMail,
      custTel,
      catsName,
      breed,
      favoriteFood,
      sex,
      age,
      comment,
    } = this.state;

    // Выполняем действия по отправке данных формы
    console.log("Отправленные данные:", {
      custName,
      custMail,
      custTel,
      catsName,
      breed,
      favoriteFood,
      sex,
      age,
      comment,
    });
    // Можно выполнить другую логику отправки данных на сервер или обработки

    // Сбрасываем значения полей после отправки формы
    this.setState({
      custName: "",
      custMail: "",
      custTel: "",
      catsName: "",
      breed: "британская коротошорстная",
      favoriteFood: [],
      sex: "",
      age: "",
      comment: "",
    });
  };

  render() {
    const {
      custName,
      custMail,
      custTel,
      catsName,
      breed,
      favoriteFood,
      sex,
      age,
      comment,
    } = this.state;

    return (
      <div className="container">
        <h1>Анкета для хозяев котиков</h1>
        <h3>(хотя...кто кому здесь хозяин?)</h3>

        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="cust-name">Имя Фамилия Отчество владельца</label>
            <input
              type="text"
              id="cust-name"
              name="custName"
              value={custName}
              placeholder="Введите Ваше имя"
              required
              onChange={this.handleChange}
            />
          </p>

          <p>
            <label htmlFor="cust-mail">Почта владельца</label>
            <input
              type="email"
              id="cust-mail"
              name="custMail"
              value={custMail}
              placeholder="meow@gmail.com"
              required
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="cust-tel">Номер телефона владельца</label>
            <input
              type="tel"
              id="cust-tel"
              name="custTel"
              value={custTel}
              placeholder="7111111111"
              required
              onChange={this.handleChange}
            />
          </p>

          <p>
            <label htmlFor="catsname">Кличка питомца</label>
            <input
              type="text"
              id="catsname"
              name="catsName"
              value={catsName}
              placeholder="Введите имя котика"
              required
              onChange={this.handleChange}
            />
          </p>

          <p>
            <label htmlFor="breed">Порода питомца</label>
            <select name="breed" value={breed} onChange={this.handleChange}>
              <option value="британская коротошорстная">
                британская коротошорстная
              </option>
              <option value="русская голубая">русская голубая</option>
              <option value="персидская">персидская</option>
              <option value="канадский сфинкс">канадский сфинкс</option>
              <option value="дворяночка">дворяночка</option>
              <option value="сиамская">сиамская</option>
              <option value="шотландская вислоухая">
                шотландская вислоухая
              </option>
            </select>
          </p>

          <p>
            <label>Что больше всего любит Ваш питомец?</label>
            <p>
              <input
                type="checkbox"
                name="favoriteFood"
                value="сухой корм"
                checked={favoriteFood.includes("сухой корм")}
                onChange={this.handleChange}
              />
              сухой корм
            </p>
            <p>
              <input
                type="checkbox"
                name="favoriteFood"
                value="куриное мясо"
                checked={favoriteFood.includes("куриное мясо")}
                onChange={this.handleChange}
              />
              куриное мясо
            </p>
            <p>
              <input
                type="checkbox"
                name="favoriteFood"
                value="овощи"
                checked={favoriteFood.includes("овощи")}
                onChange={this.handleChange}
              />
              овощи
            </p>
            <p>
              <input
                type="checkbox"
                name="favoriteFood"
                value="рыба"
                checked={favoriteFood.includes("рыба")}
                onChange={this.handleChange}
              />
              рыба
            </p>
            <p>
              <input
                type="checkbox"
                name="favoriteFood"
                value="молочные продукты"
                checked={favoriteFood.includes("молочные продукты")}
                onChange={this.handleChange}
              />
              молочные продукты
            </p>
          </p>

          <p>
            <label>Укажите пол Вашего котика</label>
            <input
              type="radio"
              name="sex"
              value="m"
              checked={sex === "m"}
              onChange={this.handleChange}
            />
            <span>Самец</span>
            <input
              type="radio"
              name="sex"
              value="f"
              checked={sex === "f"}
              onChange={this.handleChange}
            />
            <span>Самка</span>
          </p>
          <p>
            <label htmlFor="age">Сколько лет Вашему пушистику?</label>
            <input
              type="number"
              id="age"
              name="age"
              value={age}
              placeholder=""
              required
              onChange={this.handleChange}
            />
          </p>

          <p>
            <label htmlFor="comment">Комментарий</label>
            <textarea
              name="comment"
              value={comment}
              onChange={this.handleChange}
            ></textarea>
          </p>

          <p>
            <label htmlFor="photo">Прикрепите фото питомца</label>
            <input
              type="file"
              name="photo"
              multiple
              accept="image/*,image/jpeg"
              required
            />
          </p>

          <div className="btn" id="send-button">
            <button type="submit">Отправить</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CatOwnerForm;
