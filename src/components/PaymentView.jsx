import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { MdCurrencyRupee } from "react-icons/md";

const PaymentView = ({ open, setOpen,handleOpen, donators}) => {


    return (
        <Dialog open={open} handler={() => setOpen(!open)}>
        <DialogHeader>
            <p className="mx-auto text-secondary">Donators List</p>
        </DialogHeader>
          <DialogBody className="max-h-96 overflow-y-auto">
        {donators && donators.length > 0 ? (
          <table className="min-w-full text-left text-gray-700 border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border text-secondary text-center">#</th>
                <th className="px-4 py-2 border text-secondary text-center">Donator Name</th>
                <th className="px-4 py-2 border text-secondary text-center">Amount Donated</th>
              </tr>
            </thead>
            <tbody>
              {donators.map((donator, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">
                    <p className="text-center">{index + 1}</p>
                  </td>
                  <td className="px-4 py-2 border">
                    <p className="text-center">{donator.user || "Anonymous"}</p>
                  </td>
                  <td className="px-4 py-2   border">
                   <p className="flex items-center justify-center text-center"> <MdCurrencyRupee /> {donator.donationAmount || 0}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500">
            No donators found for this campaign.
          </p>
        )}
      </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    );
};

export default PaymentView;