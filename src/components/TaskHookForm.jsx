import React from 'react';
import { useForm } from "react-hook-form";

export default function TaskHookForm() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm();


  const ourSubmit = (data) => {

    // TO DO

    // RESET'i kullanacağız
  };



  return (
    <form className="taskForm" onSubmit={handleSubmit(ourSubmit)}>
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          Başlık
        </label>
        <input
          className="input-text"
          id="title"
          name="title"
          type="text"
          //onChange={handleOthersChange}
          //value={formData.title}
          {...register('title', {
            required: "Task başlığı yazmak zorundadır",
            minLength: { value: 3, message: "Task başlığı en az 3 karakterden oluşmalıdır", }
          })}
        />
        <p className="input-error">{formErrors.title}</p>
      </div>

      <div className="form-line">
        <label className="input-label" htmlFor="description">
          Açıklama
        </label>
        <textarea
          className="input-textarea"
          rows="3"
          id="description"
          name="description"
          onChange={handleOthersChange}
          value={formData.description}
        ></textarea>
        <p className="input-error">{formErrors.description}</p>
      </div>

      <div className="form-line">
        <label className="input-label">İnsanlar</label>
        <div>
          {kisiler.map((p) => (
            <label className="input-checkbox" key={p}>
              <input
                type="checkbox"
                name="people"
                value={p}
                onChange={handleCheckboxChange}
                checked={formData.people.includes(p)}
              />
              {p}
            </label>
          ))}
        </div>
        <p className="input-error">{formErrors.people}</p>
      </div>

      <div className="form-line">
        <button
          className="submit-button"
          type="submit"
          disabled={!isValid}
        >
          Kaydet
        </button>
      </div>
    </form>
  );
}
