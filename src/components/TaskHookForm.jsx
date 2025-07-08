import React from 'react';
import { useForm } from "react-hook-form";

export default function TaskHookForm({ kisiler, submitFn }) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({ mode: "onChange" });

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
        {errors.title && <p className="input-error">{errors.title.message}</p>}
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
          //onChange={handleOthersChange}
          //value={formData.description}
          {...register('description', {
            required: "Task açıklaması yazar mısın acaba??",
            minLength: { value: 10, message: "Task açıklaması ennn az 10 karakter!" }
          })}
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
                //onChange={handleCheckboxChange}
                //checked={formData.people.includes(p)}
                {...register('people', {
                  required: "Lütfen 1 kişi seç, bozuşuruz!",
                  validate: { maxKisi: (value) => { value.length < 3 || "Ennnn fazla 3 varlık seçilebilir. :) " } }
                })}
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
