import React from "react";

const AvailabilityStep = ({ availability, setAvailability }) => {
  const toggleDayAvailability = (dayIndex) => {
    const updatedDays = [...availability.days];
    updatedDays[dayIndex].available = !updatedDays[dayIndex].available;
    setAvailability({ ...availability, days: updatedDays });
  };

  const updateDayTime = (dayIndex, field, value) => {
    const updatedDays = [...availability.days];
    updatedDays[dayIndex][field] = value;
    setAvailability({ ...availability, days: updatedDays });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Disponibilidade</h2>
      
      <div className="mb-6">
        <h3 className="font-medium mb-3">Dias da Semana</h3>
        <div className="space-y-3">
          {availability.days.map((day, index) => (
            <div key={day.day} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={day.available}
                  onChange={() => toggleDayAvailability(index)}
                  className="h-5 w-5 text-indigo-600 mr-3"
                />
                <span className="font-medium">{day.day}</span>
              </div>
              {day.available && (
                <div className="flex items-center space-x-2">
                  <input
                    type="time"
                    value={day.startTime}
                    onChange={(e) => updateDayTime(index, 'startTime', e.target.value)}
                    className="p-1 border rounded"
                  />
                  <span>às</span>
                  <input
                    type="time"
                    value={day.endTime}
                    onChange={(e) => updateDayTime(index, 'endTime', e.target.value)}
                    className="p-1 border rounded"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Número máximo de pets</label>
          <input
            type="number"
            value={availability.maxPets}
            onChange={(e) => setAvailability({...availability, maxPets: parseInt(e.target.value)})}
            className="w-full p-2 border rounded"
            min="1"
          />
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={availability.sameSpeciesOnly}
              onChange={() => setAvailability({...availability, sameSpeciesOnly: !availability.sameSpeciesOnly})}
              className="h-5 w-5 text-indigo-600 mr-2"
            />
            <label>Aceitar apenas pets da mesma espécie</label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={availability.acceptAggressivePets}
              onChange={() => setAvailability({...availability, acceptAggressivePets: !availability.acceptAggressivePets})}
              className="h-5 w-5 text-indigo-600 mr-2"
            />
            <label>Aceitar pets com histórico de agressividade</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityStep;