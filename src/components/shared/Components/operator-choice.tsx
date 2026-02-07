import { Operator } from "@/enums/operator";
import { Dispatch, SetStateAction } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export type OperatorChoiceProps = {
  chosenOperator: Operator;
  setOperator: Dispatch<SetStateAction<Operator>>;
};

const operators = [
  { label: "+ Plus", value: Operator.Add },
  { label: "- Min", value: Operator.Subtract },
  { label: "× Keer", value: Operator.Multiply },
  { label: "÷ Delen", value: Operator.Divide },
];

export default function OperatorChoice({ chosenOperator, setOperator }: OperatorChoiceProps) {
  return (
    <Card className="border-[#40E0D0]/30 p-4">
      <CardContent className="pt-6">
        <RadioGroup
          value={chosenOperator}
          onValueChange={(value: string) => setOperator(value as Operator)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {operators.map((operator) => (
            <div key={operator.value} className="flex items-center space-x-2">
              <RadioGroupItem
                value={operator.value}
                id={`operator-${operator.value}`}
                className="border-2 border-muted data-[state=checked]:border-[#40E0D0] data-[state=checked]:text-[#40E0D0]"
              />
              <Label htmlFor={`operator-${operator.value}`} className="text-base font-medium cursor-pointer select-none">
                {operator.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
